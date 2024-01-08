export const formateddate = (data) => {
    const dataObj = new Date(data);
    const dzien = String(dataObj.getDate()).padStart(2, '0');
    const miesiac = String(dataObj.getMonth() + 1).padStart(2, '0');
    const rok = dataObj.getFullYear();
    
    return `${dzien}/${miesiac}/${rok}`;
}