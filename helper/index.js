import moment from "moment";

export function acceptOnlyNumbers(str) {
    if (str) {
        return str.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    }
    return null
}

export function getLowerCaseNoSpace(str) {
    if (str) {
        return str.toLowerCase().replace(/\s/g, '')
    }
    return null
}

export function formatSpecificWord(str, value, condition) {
    if(str && value && condition) {
        let word =
        condition === 'uppercase' ? value.toUpperCase() 
        : condition === 'lowercase' ? value.toLowerCase() 
        : condition === 'capitalize' ? value[0].toUpperCase() + value.slice(1).toLowerCase() 
        : value
        return str.replaceAll(value, word);
    }
    return null
}

export function capitalizeStr(str) {
    if(str) {
       return str.replace(/\b\w/g, l => l.toUpperCase())
    }
    return null
}

export const extractNOFromSTR = (str) => {
    if (str) {
        return str.toString().match(/(\d+)/)[0]
    }
    return null
}

export function formatToStdDate(date) {
    if (date) {
      return moment(date).format("DD-MM-YYYY")
    }
    return null
}

export function checkValue(value, not) {
    if(value) {
        return value
    }
    return not ? not : null
}

export const addCommas = (x) => {
    x = parseInt(x);
    x = x.toString();
    let lastThree = x.substring(x.length - 3);
    let otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')

        lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

export const titleFormatter = (m) => {
    return ucwords(m.replace(/_/g, ' '))
}

export const unslug = (m) => {
    return titleFormatter(m.replaceAll('-', ' '))
}

export const getSlugFromString = (m) => {
    return m.replace('http://','').replace('https://','')
}

export const configName = (m) => {
    return m.replaceAll('-', '_').toUpperCase();
}

export const camelCaseSlug = (m) => {
    return titleFormatter(m.replaceAll('-', ' ')).replaceAll(' ', '')
}

export const ucwords = (str) => {
    //str = str.toLowerCase();
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const objectDeepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

export const removeNewLine = (string) => {
    return string.replace(/(\r\n|\n|\r)/gm, "");
}

export const formatError = (err) => {
    if (typeof(err) === 'object') {
        if (err.hasOwnProperty('detail')) {
            err = err['detail'];
        } else if (err.hasOwnProperty('response') && typeof(err.response) !== 'undefined') {
            if(err.response.data.hasOwnProperty('message')){
                err = err.response.data.message.toString();
            }else {
                err = err.response.data.toString();
            }
        } else {
            err = err.toString();
        }
    }
    return err;
}

export const formatNumber = (number) => {
    return number > 10 ? number : '0' + number;
}

export const getFormattedOptions = (obj) => {
    if (typeof (obj) === 'undefined') {
        return [];
    }

    return obj.map(opt => {
        if (typeof (opt) === 'object') {
            return opt;
        } else {
            return Object.assign({}, {
                id: opt,
                label: opt
            })
        }
    })
}

export const typeOf = (value) => {
    let s = typeof value;
    if (s === 'object') {
        if (value) {
            if (value instanceof Array) {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}

export const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}

export const truncate = (string, value) => {
    return string.substring(0, value) + ((string.length > value) ?  '…' : '');
}

export const getUniqueValues = (arr) => {
    console.log(arr);
    return arr.filter(function(item, pos){
        return arr.indexOf(item) == pos;
    });
}

export const getFormattedLang = (lang) => {
    if(!lang) lang = process.env.DEFAULT_LANG
    return lang.split('-')[0].toUpperCase()
}

export const getLangKey = (lang) => {
  if(!lang) lang = process.env.DEFAULT_LANG
  return lang.split('-')[0].toLowerCase()
}

export const getImageURL = (dataObj, defaultUrl, bannerName) => {
  if (dataObj && dataObj.hasOwnProperty('coverMedias') && dataObj.coverMedias.length > 0) {
        let arr = dataObj.coverMedias.filter(el => el.name === bannerName)
        if (arr.length > 0) {
            return arr[0].media.url
        }
        else return defaultUrl
    }
    else return defaultUrl
}

export const getMetas = (obj, key) => {
    if (obj.seo && obj.seo.hasOwnProperty(key)) {
        return obj.seo[key]
    }
    else {
        return key
    }
}

export const getClientID = () => {
    try {
        if(ga){
            var trackers = ga.getAll();
            var i, len;
            for (i = 0, len = trackers.length; i < len; i += 1) {
                if (trackers[i].get('trackingId') === process.env.GACode) {
                    return trackers[i].get('clientId');
                }
            }
        }
    } catch(e) {
        console.log('getClientID', e)
    }
    return false;
}

export const formatDuration = (time) => {
    let myTime = time
    let formattedTime = 'few'
    if (myTime) {
        if (myTime > 1) {
            let decimal = myTime % 1
            if (decimal === 0) {
                formattedTime = myTime
            }
            if (decimal <= 0.30) {
                formattedTime = Math.floor(myTime)
            }
            else {
                formattedTime = Math.ceil(myTime)
            }
        }
        else {
            formattedTime = 1
        }
    }
    return formattedTime
}

export const convertSecondsToMinutes = (time, format) => {
    let myTime = time
    if (myTime && format === 'hours') {
        myTime = formatDuration(myTime)
        return new Date(myTime * 1000).toISOString().substr(11, 8);
    } else if(myTime && format === 'minutes') {
        myTime = formatDuration(myTime)
        return new Date(myTime * 1000).toISOString().substr(14, 5);
    } else {
        return null
    }
}

export const formatNumberToK = (number) => {
    let num = number
    if (num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    } else return num
}

export const seoValidator = (data, seoArr) =>{
    if (data) {
      return data.content[seoArr].length > 0 ? data.content[seoArr][0] : []
    }else {
      return ''
    }
}

export const getDefaultLang = () =>{
    let defaultLang = 'vi'
    if(process.browser){
        try {
            const pathArr = window.location.pathname.split('/')
            if(pathArr.length > 2){
                defaultLang = getLangKey(pathArr[1]);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return defaultLang;
}

export function setCookie(cookieName, cookieValue, expireTime) {
    if(process.NODE_ENV === 'production'){
        const cookie = cookieName + "=" + cookieValue + ";domain=."+ config.WEBSITE_HOST +";path=/" + ((location && location.protocol === 'https:') ? ';secure' : '');
        document.cookie = cookie;
    }else{
        document.cookie = cookieName + "=" + cookieValue + `;expires=${expireTime}` + ";path=/"
    }
}

export function getCookie(cookieName) {
    const nameEQ = cookieName + "="
    const cookieArr = document.cookie.split(';')
    for(var i=0;i < cookieArr.length;i++) {
        var c = cookieArr[i]
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length)
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length)
        }
    }
    return null
}

export function getCookieFromCookieString(string, cookieName) {
    const nameEQ = cookieName + "="
    const cookieArr = string ? string.split(';') : ""
    for(var i=0;i < cookieArr.length;i++) {
        var c = cookieArr[i]
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length)
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length)
        }
    }
    return null    
}

export function eraseCookie(cookieName) {
    if(process.NODE_ENV === 'production'){
        document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;' +  'domain=.' + config.WEBSITE_HOST
    }else{
        document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;'
    }
}

export function closestLocation (targetLocation, locationArray) {
    return locationArray.reduce((prev, curr) => {
        let prevDistance = locationDistance(targetLocation , {lattitude: prev.lattitude, longitude: prev.longitude})
        let currDistance = locationDistance(targetLocation , {lattitude: curr.lattitude, longitude: curr.longitude})
        return (prevDistance < currDistance) ? prev : curr
    })
}

export function vectorDistance (dx, dy) {
    return Math.sqrt((dx * dx) + (dy * dy))
}

export function locationDistance (location1, location2) {
    let dx = location1.lattitude - location2.lattitude
    let dy = location1.longitude - location2.longitude

    return vectorDistance(dx, dy)
}

export function rad(x) {
    return x * Math.PI / 180;
}

export function getDistance(p1, p2) {
    let R = 6378137 // Earth’s mean radius in meter

    let dLat = rad(p2.lat - p1.lat)
    let dLong = rad(p2.lng - p1.lng)

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2)

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c

    const mi = d * 0.000621371192
    return mi.toFixed(1) + " miles" // returns the distance in meter
  };
