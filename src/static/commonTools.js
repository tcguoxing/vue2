export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// const url = new URL(window.location.href);
// const paramValue = url.searchParams.get( paramName );
// console.log(paramValue);

export const getQueryParam = (paramName) => new URL(window.location.href).searchParams.get(paramName)
export const getAllQueryParams = () => new URL(window.location.href).searchParams.getAll()