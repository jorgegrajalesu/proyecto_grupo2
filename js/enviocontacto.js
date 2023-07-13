//declarar variables para los identificadores que estan en la etiqueta form y a
const formcontact = document.querySelector('#formcontact');
const recepcion = document.querySelector('#recepcion');

//crear una captura o "escuchar" el evento submit
formcontact.addEventListener('submit',envioInfo);
//crear una funcion llamada envioInfo, para la captura y envio de la informacion
function envioInfo(event){
    event.preventDefault();
    //utilizar una clase llamada formData
    const envioForm = new FormData(this);
    recepcion.setAttribute('href',`mailto:${envioForm.get('email')}?subject=nombre: ${envioForm.get('nombre')} email: ${envioForm.get('email')}&body=celular: ${envioForm.get('celular')} ${envioForm.get('mensaje')}`);
    //evento click
    recepcion.click();
}
