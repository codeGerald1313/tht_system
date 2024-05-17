<template>
  <div>
    <Card title="Información Empresa">
      <form @submit.prevent="updateImage">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <!-- Campos de texto -->
          <div class="lg:col-span-2 md:col-span-2 col-span-1">
            <div class="grid grid-cols-2 gap-4">
              <Textinput v-model="form.razonSocial" label="Razón social" placeholder="Ingrese Razón social" disabled />
              <Textinput v-model="form.numeroRUC" label="N° RUC" placeholder="Ingrese N° RUC" disabled />
              <Textinput v-model="form.nombreComercial" label="Nombre comercial"
                placeholder="Ingrese nombre comercial" />
              <Textinput v-model="form.direccion" label="Dirección" placeholder="Ingrese direción" />
              <div class="flex gap-4">
                <div class="w-1/2">
                  <Textinput v-model="form.celular" label="Celular" placeholder="N° Celular" />
                </div>
                <div class="w-1/2">
                  <Textinput v-model="form.telefono" label="Teléfono" placeholder="N° Teléfono" />
                </div>
              </div>
              <Textinput v-model="form.correoElectronico" label="Correo electrónico"
                placeholder="Ingrese correo electrónico" />
              <Textinput v-model="form.acercaDeLaEmpresa" label="Acerca de la empresa"
                placeholder="Ingrese detalle acerca la empresa" />
              <Textinput v-model="form.queOfrecemos" label="¿Qué ofrecemos?"
                placeholder="Ingresar detalle de lo que se ofrecemos" />
            </div>
          </div>

          <!-- DropZone en el lado derecho -->
          <div class="lg:col-span-1 md:col-span-1 col-span-1">
            <div v-bind="getRootProps()"
              class="w-full text-center border-dashed border border-secondary-500 rounded-md py-[52px] flex flex-col justify-center items-center "
              :class="files.length === 0 ? 'cursor-pointer' : ' pointer-events-none'">
              <div v-if="files.length === 0">
                <input v-bind="getInputProps()" class="hidden" />
                <img v-if="imageUrl2" :src="imageUrl2" alt="Imagen de la empresa"
                  class="mx-auto mb-4 object-cover h-[156px] w-[280px] rounded-md" />
                <p v-if="isDragActive" class="text-sm text-slate-500 dark:text-slate-300 font-light">
                  Drop the files here ...
                </p>
                <p v-else class="text-sm text-slate-500 dark:text-slate-300 font-light">
                  Seleccionar Imagen
                </p>
              </div>
              <div class="flex space-x-4 ">
                <div v-for="(file, i) in files" :key="i" class="mb-4 flex-none">
                  <div class="h-[180px] w-[240px] mx-auto mt-6 rounded-md" key="{i}">
                    <img :src="file.preview" class="object-cover h-full w-full block rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <Alert :type="item.type" v-for="(item, i) in alertType4" :key="i" dismissible :icon="item.icon"
                class="mb-5 mt-3">
                <span class="font-semibold">Se recomienda 280px * 230px .png</span>
              </Alert>
            </div>
            <!-- Espacio para los botones -->
            <div class="mt-5 flex justify-end"> <!-- Alineado a la derecha -->
              <Button text="Cancelar" btnClass="btn-light mr-2" @click.prevent="cancel" /> <!-- Botón Cancelar -->
              <Button type="submit" text="Guardar Cambios" btnClass="btn-dark" /> <!-- Botón Submit -->
            </div>
          </div>
        </div>
      </form>
    </Card>
  </div>
</template>

<script setup>
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumbs";
import Textinput from "@/components/Textinput";
import Button from "@/components/Button";
import Alert from "@/components/Alert";
import { useToast } from 'vue-toastification'; // Importa useToast de vue-toastification
import { useDropzone } from "vue3-dropzone";
import { useAuth } from "../../../store/auth"
import { computed, ref, watch, onMounted } from "vue";

const toast = useToast(); // Inicializa useToast

import {

  alertType4,
} from "../../../constant/data";

import axios from "axios";

const headers = useAuth().headersMultipart(); // Obtiene los encabezados de autenticación
const headers2 = useAuth().headers(); // Obtiene los encabezados de autenticación

const imageUrl2 = ref(null); // Referencia reactiva para almacenar la URL de la imagen

const width = ref(0);

const files = ref([]);


const form = ref({
  razonSocial: '',
  numeroRUC: '',
  nombreComercial: '',
  direccion: '',
  celular: '',
  telefono: '',
  correoElectronico: '',
  acercaDeLaEmpresa: '',
  queOfrecemos: '',
  image: imageUrl2.value // Nuevo campo para la imagen
});

async function updateImage() {
  try {
    const formData = new FormData();

    // Si hay archivos en 'files', se actualizará la imagen
    if (files.value.length > 0) {
      formData.append('image', files.value[0]); // Asegúrate de que 'files' esté disponible en tu componente

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/company/${5}/update-image`, // Asegúrate de que 'companyId' esté disponible en tu componente
        formData,
        headers
      );

      toast.success(response.data.message);
    } else {
      // Si no hay archivos en 'files', se actualizarán los campos
      formData.append('ruc', form.value.numeroRUC);
      formData.append('social_reason', form.value.razonSocial);
      formData.append('tradename', form.value.nombreComercial);
      formData.append('address', form.value.direccion);
      formData.append('email', form.value.correoElectronico);
      formData.append('cellphone', form.value.celular);
      formData.append('telephone', form.value.telefono);
      formData.append('offers_description', form.value.queOfrecemos);
      formData.append('activity_description', form.value.acercaDeLaEmpresa);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/company/${5}/update-fields`, // Asegúrate de que 'companyId' esté disponible en tu componente
        formData,
        headers2
      );

      toast.success(response.data.message);
    }
  } catch (error) {
    console.error('Error al actualizar:', error);
    toast.error('Error al actualizar');
  }
}



const isSkeletion = ref(true);
const isSkeletion2 = ref(null);
setTimeout(() => {
  isSkeletion.value = false;
  isSkeletion2.value = false;
}, 1000);



async function submitForm() {
  try {
    const formData = new FormData();
    formData.append('ruc', form.value.ruc);
    // Agrega los demás campos del formulario al objeto FormData según sea necesario
    formData.append("image", files.value[0]);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/company/save`, // Reemplaza companyId con el ID de la empresa que estás actualizando
      formData,
      headers
    );

    console.log(response.data);
    // Resto de la lógica de manejo de la respuesta
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
  }
}



const list = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/company/informacion`,
      headers
    );

    console.log(response);

    // Verificar si se recibió un mensaje del servidor y mostrarlo en un toast
    if (response.data.message) {
      toast.success(response.data.message, {
        timeout: 3000 // Duración del toast en milisegundos (en este caso, 3 segundos)
      });

      // Asignar los datos recibidos del servidor a las propiedades del objeto form
      const responseData = response.data.data[0]; // Accede al primer objeto en el arreglo de datos
      form.value.razonSocial = responseData.social_reason || '';
      form.value.numeroRUC = responseData.ruc || '';
      form.value.nombreComercial = responseData.tradename || '';
      form.value.direccion = responseData.address || '';
      form.value.celular = responseData.cellphone || '';
      form.value.telefono = responseData.telephone || '';
      form.value.correoElectronico = responseData.email || '';
      form.value.acercaDeLaEmpresa = responseData.activity_description || '';
      form.value.queOfrecemos = responseData.offers_description || '';
      const imageUrl = responseData.url_image || '';
      const imageName = imageUrl.split('/').pop(); // Extraer el nombre del archivo de la URL

      form.value.image = imageName || '';



      const response2 = await axios.get(
        `${import.meta.env.VITE_API_URL}/company/image/${form.value.image}`, // Suponiendo que form.value.image contiene el nombre de la imagen
        { responseType: 'blob', ...headers } // Indicar que esperamos una respuesta de tipo blob
      );

      console.log(response2);


      imageUrl2.value = URL.createObjectURL(response2.data);

      console.log(imageUrl2.value);
      //getImage();
    }



    // Verificar si se recibieron datos válidos y almacenarlos en el objeto form como se mostró anteriormente

  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error('Ocurrió un error al obtener los datos'); // Muestra un toast de error si ocurre un error en la solicitud
  }
};

function onDrop(acceptFiles) {
  files.value = acceptFiles.map((file) =>
    Object.assign(file, {
      preview: URL.createObjectURL(file),
    })
  );
}

const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

const cancel = () => {
  // Lógica para cancelar la acción actual
  console.log('Acción cancelada');
};

onMounted(async() => {
  list();
  // getImage();

});


</script>

<style lang=""></style>
