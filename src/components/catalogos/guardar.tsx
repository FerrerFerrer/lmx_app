//Guarda en el localstorage lo que debera abrir en la siguiente pestaña, algunas pestañas traen lo guardado
//todo para reutilizar algunas pestañas
export const guardar:any = (area:string, id:string) => {
    // localStorage.clear();
    localStorage.removeItem(id);
    // localStorage.setItem('area', area);
    localStorage.setItem(id, area);
    // console.log(area);
}


//Atajos para ciertos productos del menu principal, cada pestaña es dinamica
//antes de iniciarce la pestañas, busca en el local storage para saber que imagenes mostrar
export const guardarAtajos:any = (area:string, categoria:string) => {
    // Area =  categ.tsx
    localStorage.removeItem('area');
    localStorage.setItem('area', area);
    //categoria =data.tsx
    localStorage.removeItem('categoria');
    localStorage.setItem('categoria', categoria);
    // console.log(area, categoria);
}