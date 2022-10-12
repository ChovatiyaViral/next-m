import action from '../redux/actions';
import { getCookie } from './cookie';
import { formatError } from './helper';
import { useDispatch, useSelector } from "react-redux";
const { updateDeviceType, reauthenticate, deauthenticate, getTemplateData } = action;

export const initialize = async (ctx, store) => {
    const { req } = ctx;
    const state = store.getState();
    if(!state.app.isMobile){
        const isMobile = Boolean(
          (ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent).match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
          ),
        );
        await store.dispatch(updateDeviceType(isMobile))
    }

    if(!process.browser) {
        if(req.headers.cookie && getCookie('blackbull', req)) {
          const response = await store.dispatch(reauthenticate(getCookie('blackbull', req))).catch(err => onUnauthorize(err, ctx, store));
        }
    }
    if(!state.content?.template){
      await store.dispatch(getTemplateData()).catch(err => console.log('----getTemplateData-----', formatError(err)))
    }
};

async function onUnauthorize(err, ctx, store){
    console.log(formatError(err))
    console.log('--------------------- onUnauthorize ---------------------')
    if (err.response && err.response.status && err.response.status === 401) {
      //Logout logic
      await store.dispatch(deauthenticate(ctx.isServer))
      ctx.res?.clearCookie("blackbull");
    }
  }

