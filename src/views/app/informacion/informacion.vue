<template>
    <Card title="Información Empresadsdsdsd">
      <div>
        <div class="flex flex-wrap justify-between items-center mb-4">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <!-- Campos de texto -->
            <div class="lg:col-span-2 md:col-span-2 col-span-1">
              <div class="grid grid-cols-2 gap-4">
                <Textinput label="Razón social" v-model="company.social_reason" :disabled="true" />
                <Textinput label="N° RUC" v-model="company.ruc" :disabled="true" />
                <Textinput label="Nombre comercial" v-model="company.tradename" />
                <Textinput label="Dirección" v-model="company.address" />
                <div class="flex gap-4"> <!-- Contenedor para los campos de "Celular" y "Teléfono" -->
                  <div class="w-1/2"> <!-- Dividir en dos columnas -->
                    <Textinput label="Celular" v-model="company.cellphone" />
                  </div>
                  <div class="w-1/2"> <!-- Dividir en dos columnas -->
                    <Textinput label="Teléfono" v-model="company.telephone" />
                  </div>
                </div>
                <Textinput label="Correo electrónico" v-model="company.email" />
                <Textinput label="Acerca de la empresa" v-model="company.activity_description" />
                <Textinput label="¿Qué ofrecemos?" v-model="company.offers_description" />
              </div>
            </div>
            <!-- DropZone en el lado derecho -->
            <div class="lg:col-span-1 md:col-span-1 col-span-1">
              <DropZone />
              <!-- Espacio para el botón -->
              <div class="mt-5"> <!-- Añadido margen superior -->
                <Button text="Submit" btnClass="btn-dark" />
              </div>
            </div>
          </div>
  
        </div>
  
      </div>
    </Card>
  </template>
  
  <script>
  import Textinput from "@/components/Textinput";
  import Checkbox from "@/components/Checkbox";
  import Button from "@/components/Button";
  import Select from "@/components/Select";
  import DropZone from "../../forms/file-input/DropZone.vue";
  import Breadcrumb from "@/components/Breadcrumbs";
  import Card from "@/components/Card";
  
  export default {
    components: {
      Card,
      Textinput,
      Checkbox,
      Button,
      Select,
      DropZone,
      Breadcrumb
    },
    data() {
      return {
        company: {
          social_reason: '',
          ruc: '',
          tradename: '',
          address: '',
          cellphone: '',
          telephone: '',
          email: '',
          activity_description: '',
          offers_description: '',
        }
      };
    }
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos si es necesario */
  </style>