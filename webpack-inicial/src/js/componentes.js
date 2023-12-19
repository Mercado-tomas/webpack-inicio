
export const  saludar = (nombre) => {
    console.log('Hola desde node');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, como estas?}`;

    document.body.append(h1);
}



