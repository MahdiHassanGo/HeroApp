const getStoreApp = ()=>{
    const storeAppStr =localStorage.getItem('appList');

    if(storeAppStr){
        const storeAppData = JSON.parse(storeAppStr);
        return storeAppData;
    }
    else{
        return[];
    }

}

const addToStoreDb = (id) => {
    const storeAppData = getStoreApp();
    if (storeAppData.includes(id)) {
        return;
    }

    storeAppData.push(id);
    const data = JSON.stringify(storeAppData);
    localStorage.setItem('appList', data);
};

const removeFromStoreDb = (id) => {
    const storeAppData = getStoreApp();
    const filtered = storeAppData.filter(item => item !== id);
    localStorage.setItem('appList', JSON.stringify(filtered));
};

const isAppInStore = (id) => {
    const storeAppData = getStoreApp();
    return storeAppData.includes(id);
};

export { addToStoreDb, getStoreApp, removeFromStoreDb, isAppInStore }