import axios from "axios";
import { useAuth } from "../../store/auth";

const dataFromBackend = {
  "categorias": [
    "CHULLACHAQUI",
    "SANTA ELENA Y CUEVAS",
    "MIRADOR TAYTAMAKI",
    "AHUASHIYACU",
    "LAGUNA AZUL",
    "HUACAMAILLO"
  ],
  "datosSeries": [
    [1, 1, 1, 1, 2, 1]
  ]
};


const headers = useAuth().headers(); // Obtiene los encabezados de autenticación



let colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#475569",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
  purple: "#A3A1FB",
};

export const columnChart = {
  series: [
    {
      name: "Efectivo",
      data: [],
    },
    {
      name: "Visa",
      data: [],
    },
    {
      name: "Cheque",
      data: [],
    },
    {
      name: "Depósito a cuenta",
      data: [],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 10,
      colors: ["transparent"],
    },
    legend: {
      labels: {
        colors: "#CBD5E1",
      },
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      position: "back",
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B", "#3AAFA9"],
  },
};


export const columnChartDark = {
  series: [
    {
      name: "Efectivo",
      data: [],
    },
    {
      name: "Visa",
      data: [],
    },
    {
      name: "Cheque",
      data: [],
    },
    {
      name: "Depósito a cuenta",
      data: [],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 10,
      colors: ["transparent"],
    },
    legend: {
      labels: {
        colors: "#CBD5E1",
      },
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      position: "back",
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B", "#3AAFA9"],
  },
};


async function updateColumnChartDataFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-metodopag-bar`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extrae las propiedades necesarias del objeto de respuesta
      const { incomeData, dates } = response.data;

      // Mapea los datos del backend al formato esperado por columnChart.series
      const newSeries = incomeData.map((item) => ({
        name: item.name,
        data: item.data.map((value) => parseFloat(value) || 0),
      }));

      // Actualiza el objeto columnChart con los nuevos datos
      columnChart.series = newSeries;
      columnChart.chartOptions.xaxis.categories = dates;

      console.log('Objeto columnChart actualizado:', columnChart);

      // Aquí deberías llamar a la función o método que utiliza el objeto columnChart
      // para renderizar el gráfico en la interfaz de usuario
      //renderColumnChart(columnChart); // Suponiendo que tienes una función renderColumnChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar columnChart
updateColumnChartDataFromBackend();
// Función para obtener los datos del backend y actualizar el gráfico de columnas
async function updateColumnChartDarkFromBackend() {
  try {
    // Realizar una solicitud GET al endpoint del backend que devuelve los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-metodopag-bar`, headers);

    // Verificar si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extraer las propiedades necesarias del objeto de respuesta
      const { incomeData, dates } = response.data;

      // Mapear los datos del backend al formato esperado por el gráfico
      const newSeries = incomeData.map((item) => ({
        name: item.name,
        data: item.data.map((value) => parseFloat(value) || 0),
      }));

      // Actualizar el gráfico con los nuevos datos
      columnChartDark.series = newSeries;
      columnChartDark.chartOptions.xaxis.categories = dates;

      console.log('Gráfico de columnas actualizado:', columnChartDark);

      // Aquí deberías llamar a la función o método que renderiza el gráfico
      // renderColumnChart(columnChartDark); // Suponiendo que tienes una función renderColumnChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar el gráfico al iniciar o según sea necesario
updateColumnChartDarkFromBackend();

// basic bar chart
export const basicBar = {
  series: [
    {
      data: [], // Los datos se actualizarán dinámicamente
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [], // Las categorías se actualizarán dinámicamente
    },
    colors: ["#4669FA"],
  },
};


export const basicBarDark = {
  series: [
    {
      data: [], // Los datos se actualizarán dinámicamente
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      max: 13, // Establece el límite máximo en el eje Y

    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
    
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const val = w.globals.series[seriesIndex][dataPointIndex];
        return `<span class="bg-gray-900 text-white p-2 rounded">Total: ${val}</span>`;
      },
    },
    colors: ["#4669FA"],
  },
};


// Función para realizar la llamada al backend, obtener datos y actualizar el gráfico
const actualizarGraficoDesdeBackend = async (grafico) => {
  try {
    // Realizar una solicitud GET al backend para obtener los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/most-populars-tours`, headers);

    // Extraer los datos recibidos del backend
    const { categorias, datosSeries } = response.data;

    // Determinar qué objeto de gráfico actualizar según el tipo de gráfico pasado como argumento
    const graficoToUpdate = grafico === 'basicBarDark' ? basicBarDark : basicBar;

    // Actualizar los datos y las categorías con los datos del backend
    graficoToUpdate.series[0].data = datosSeries[0];
    graficoToUpdate.chartOptions.xaxis.categories = categorias;

    return graficoToUpdate;

  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    return null; // Manejar errores de manera apropiada según tu aplicación
  }
};

// Uso de la función para obtener datos desde el backend y actualizar el gráfico básico
actualizarGraficoDesdeBackend('basicBar')
  .then((updatedBasicBar) => {
    if (updatedBasicBar) {
      // Aquí puedes usar `updatedBasicBar` para mostrar el gráfico actualizado en tu aplicación
      console.log('Gráfico básico actualizado:', updatedBasicBar);

      // Por ejemplo, si estás usando una librería de gráficos como ApexCharts, puedes llamar a un método para mostrar el gráfico
      // chart.render(updatedBasicBar);
    } else {
      console.error('No se recibieron datos válidos del backend para el gráfico básico.');
    }
  })
  .catch((error) => {
    console.error('Error al obtener o procesar datos desde el backend para el gráfico básico:', error);
  });

// Uso de la función para obtener datos desde el backend y actualizar el gráfico con tema oscuro
actualizarGraficoDesdeBackend('basicBarDark')
  .then((updatedBasicBarDark) => {
    if (updatedBasicBarDark) {
      // Aquí puedes usar `updatedBasicBarDark` para mostrar el gráfico con tema oscuro actualizado en tu aplicación
      console.log('Gráfico con tema oscuro actualizado:', updatedBasicBarDark);

      // Por ejemplo, si estás usando una librería de gráficos como ApexCharts, puedes llamar a un método para mostrar el gráfico
      // chart.render(updatedBasicBarDark);
    } else {
      console.error('No se recibieron datos válidos del backend para el gráfico con tema oscuro.');
    }
  })
  .catch((error) => {
    console.error('Error al obtener o procesar datos desde el backend para el gráfico con tema oscuro:', error);
  });



async function updateMultipleRadialbarsFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-vs-expense`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extrae las propiedades necesarias del objeto de respuesta
      const { series, labels, colors } = response.data;

      // Actualiza el gráfico con los datos del backend
      MultipleRadialbars.series = series;
      MultipleRadialbars.chartOptions.labels = labels;
      MultipleRadialbars.chartOptions.colors = colors;

      console.log('Gráfico actualizado:', MultipleRadialbars);
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
  }
}

// Llama a la función de actualización al iniciar o en cualquier otro momento según sea necesario
updateMultipleRadialbarsFromBackend();


async function updateMultipleRadialbarsDarkFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend para gráfico oscuro
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-vs-expense`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extrae las propiedades necesarias del objeto de respuesta
      const { series, labels, colors } = response.data;

      // Actualiza el gráfico oscuro con los datos del backend
      MultipleRadialbarsDark.series = series;
      MultipleRadialbarsDark.chartOptions.labels = labels;
      MultipleRadialbarsDark.chartOptions.colors = colors;

      console.log('Gráfico oscuro actualizado:', MultipleRadialbarsDark);
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend para gráfico oscuro.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend para gráfico oscuro:', error);
  }
}

// Llama a la función de actualización del gráfico oscuro al iniciar o en cualquier otro momento según sea necesario
updateMultipleRadialbarsDarkFromBackend();

export const bubboleChart = {
  series: [
    {
      name: "Product1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    fill: {
      type: "gradient",
    },

    xaxis: {
      tickAmount: 12,
      type: "datetime",

      labels: {
        rotate: 0,
      },
    },
    yaxis: {
      max: 70,
    },
    theme: {
      palette: "palette2",
    },
    colors: ["#4669FA", "#FA916B", "#50C793", "#0CE7FA"],
  },
};
export const bubboleChartDark = {
  series: [
    {
      name: "Product1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    fill: {
      type: "gradient",
    },
    legend: {
      labels: {
        colors: "#CBD5E1",
      },
    },

    xaxis: {
      tickAmount: 12,
      type: "datetime",

      labels: {
        rotate: 0,
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      position: "back",
    },

    yaxis: {
      max: 70,
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    theme: {
      palette: "palette2",
    },
    colors: ["#4669FA", "#FA916B", "#50C793", "#0CE7FA"],
  },
};


export const donutChart = {
  series: [44, 55, 41],

  chartOptions: {
    labels: ["success", "Return", "Cancel"],
    dataLabels: {
      enabled: true,
    },

    colors: ["#50C793", "#F1595C", "#FBBF24"],
    legend: {
      position: "bottom",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "26px",
              fontWeight: "bold",
              fontFamily: "Inter",
            },
            value: {
              show: true,
              fontFamily: "Inter",
              formatter(val) {
                // eslint-disable-next-line radix
                return `${parseInt(val)}%`;
              },
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              label: "Total",
              formatter() {
                return "20%";
              },
            },
          },
        },
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
export const donutChartDark = {
  series: [44, 55, 41],

  chartOptions: {
    labels: ["success", "Return", "Cancel"],
    dataLabels: {
      enabled: true,
    },

    colors: ["#50C793", "#F1595C", "#FBBF24"],
    legend: {
      position: "bottom",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#CBD5E1",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "26px",
              fontWeight: "bold",
              fontFamily: "Inter",
              color: "#CBD5E1",
            },
            value: {
              show: true,
              fontFamily: "Inter",
              color: "#CBD5E1",
              formatter(val) {
                // eslint-disable-next-line radix
                return `${parseInt(val)}%`;
              },
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              color: "#CBD5E1",
              label: "Total",
              formatter() {
                return "20%";
              },
            },
          },
        },
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};


export const stackChart = {
  series: [
    {
      name: "Efectivo",
      data: [],
    },
    {
      name: "Visa",
      data: [],
    },
    {
      name: "Cheque",
      data: [],
    },
    {
      name: "Depósito a cuenta",
      data: [],
    },
  ],
  chartOptions: {
    chart: {
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      position: "back",
    },
    legend: {
      labels: {
        colors: "#CBD5E1",
      },
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B", "#3AAFA9"],
  },
};

export const stackChartDark = {
  series: [
    {
      name: "Efectivo",
      data: [],
    },
    {
      name: "Visa",
      data: [],
    },
    {
      name: "Cheque",
      data: [],
    },
    {
      name: "Depósito a cuenta",
      data: [],
    },
  ],
  chartOptions: {
    chart: {
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      position: "back",
    },
    legend: {
      labels: {
        colors: "#CBD5E1",
      },
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B", "#3AAFA9"],
  },
};

// Función para actualizar el objeto stackChart con los datos del backend
async function updateStackChartDataFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend para obtener los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-concept-tackbar`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extrae las propiedades necesarias del objeto de respuesta
      const { incomeData, dates } = response.data;

      // Mapea los datos del backend al formato esperado por stackChart.series
      const newSeries = incomeData.map((item) => ({
        name: item.name,
        data: item.data.map((value) => parseFloat(value) || 0),
      }));

      // Actualiza el objeto stackChart con los nuevos datos
      stackChart.series = newSeries;
      stackChart.chartOptions.xaxis.categories = dates;

      // Ajustar colores según la cantidad de series
      const numSeries = newSeries.length;
      stackChart.chartOptions.colors = ['#4669FA', '#0CE7FA', '#FA916B', '#3AAFA9'].slice(0, numSeries);

      console.log('Objeto stackChart actualizado:', stackChart);

      // Aquí puedes llamar a una función o método que utilice el objeto stackChart
      // para renderizar el gráfico en la interfaz de usuario
      // renderStackChart(stackChart); // Suponiendo que tienes una función renderStackChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar stackChart
updateStackChartDataFromBackend();

// Función para actualizar el objeto stackChartDark con los datos del backend
async function updateStackChartDarkDataFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend para obtener los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-concept-tackbar`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extrae las propiedades necesarias del objeto de respuesta
      const { incomeData, dates } = response.data;

      // Mapea los datos del backend al formato esperado por stackChartDark.series
      const newSeries = incomeData.map((item) => ({
        name: item.name,
        data: item.data.map((value) => parseFloat(value) || 0),
      }));

      // Actualiza el objeto stackChartDark con los nuevos datos
      stackChartDark.series = newSeries;
      stackChartDark.chartOptions.xaxis.categories = dates;

      // Ajustar colores según la cantidad de series
      const numSeries = newSeries.length;
      stackChartDark.chartOptions.colors = ['#4669FA', '#0CE7FA', '#FA916B', '#3AAFA9'].slice(0, numSeries);

      console.log('Objeto stackChartDark actualizado:', stackChartDark);

      // Aquí puedes llamar a una función o método que utilice el objeto stackChartDark
      // para renderizar el gráfico en la interfaz de usuario
      // renderStackChart(stackChartDark); // Suponiendo que tienes una función renderStackChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar stackChartDark
updateStackChartDarkDataFromBackend();

export const MultipleRadialbars = {
  series: [],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            color: "#475569",
          },
          value: {
            fontSize: "16px",
            color: "#475569",
          },
          total: {
            show: true,
            label: "Total",
            color: "#475569",
            formatter: function (val) {

              return 100 + "%";
            },
          },
        },
      },
    },
    labels: [],
    colors: [],
  },
};


export const MultipleRadialbarsDark = {
  series: [],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            color: "#E2E8F0",
          },
          value: {
            fontSize: "16px",
            color: "#E2E8F0",
          },
          total: {
            show: true,
            label: "Total",
            color: "#E2E8F0",
            formatter: function (val) {

              return 100 + "%";
            },
          },
        },
        track: {
          background: "#E2E8F0",
          strokeWidth: "97%",
        },
      },
    },
    labels: [],
    colors: [],
  },
};



export const basicArea2 = {
  series: [
    {
      name: "Incomes",
      data: [],
    },
    {
      name: "Expenses",
      data: [],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
      width: 1,
    },
    colors: [colors.primary, colors.warning],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 4,
      show: true,
      fontSize: "12px",
      fontFamily: "Inter",
      labels: {
        colors: "#CBD5E1",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.3,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 30, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
  },
};


export const basicArea2Dark = {
  series: [
    {
      name: "Incomes",
      data: [],
    },
    {
      name: "Expenses",
      data: [],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: [colors.primary, colors.warning],
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 4,
      show: true,
      fontSize: "12px",
      fontFamily: "Inter",
      labels: {
        colors: "#CBD5E1",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.3,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 30, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
  },
};

async function updateBasicArea2FromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-vs-expense-days`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extrae las propiedades necesarias del objeto de respuesta
      const { series, categories } = response.data;

      // Actualiza el gráfico básico de área con los datos del backend
      basicArea2.series = series.map((item) => {
        return {
          name: item.name,
          data: item.data.map((value) => parseFloat(value)), // Convierte los valores a números
        };
      });
      basicArea2.chartOptions.xaxis.categories = categories;

      console.log('Gráfico básico de área actualizado:', basicArea2);
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend para gráfico de área básico:', error);
  }
}

// Llama a la función de actualización del gráfico básico de área al iniciar o según sea necesario
updateBasicArea2FromBackend();

async function updateBasicArea2DarkFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/income-vs-expense-days`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      // Extrae las propiedades necesarias del objeto de respuesta
      const { series, categories } = response.data;

      // Actualiza el gráfico oscuro con los datos del backend
      basicArea2Dark.series = series.map((item) => {
        return {
          name: item.name,
          data: item.data.map((value) => parseFloat(value) || 0), // Convierte valores a números o 0 si no son válidos
        };
      });
      basicArea2Dark.chartOptions.xaxis.categories = categories;

      console.log('Gráfico de área básico oscuro actualizado:', basicArea2Dark);
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend para gráfico de área básico oscuro.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend para gráfico de área básico oscuro:', error);
  }
}

// Llama a la función de actualización del gráfico oscuro de área básico al iniciar o según sea necesario
updateBasicArea2DarkFromBackend();



export const pieChartBedrooms = {
  series: [],
  chartOptions: {
    labels: [],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, colors.warning, colors.purple],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};


export const pieChartDarkBedrooms = {
  series: [],

  chartOptions: {
    labels: [],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, colors.warning, colors.purple],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#CBD5E1",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

export const pieChart = {
  series: [],
  chartOptions: {
    labels: [],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, colors.warning, colors.purple],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};


export const pieChartDark = {
  series: [],

  chartOptions: {
    labels: [],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, colors.warning, colors.purple],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: "#CBD5E1",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};


// Función para obtener datos del backend y actualizar pieChartDark
async function updatePieChartFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend para obtener los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/reservas-hotel-pai-tipo-dormitorio`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      const { labels, series } = response.data;

      // Actualiza las series del gráfico con los datos de series del backend
      pieChartBedrooms.series = series;

      // Actualiza las etiquetas del gráfico con los datos de labels del backend
      pieChartBedrooms.chartOptions.labels = labels;

      

      console.log('Objeto pieChartBedrooms actualizado con datos del backend:', pieChartBedrooms);

      // Aquí puedes llamar a una función o método que utilice el objeto pieChartDark
      // para renderizar el gráfico en la interfaz de usuario
      // renderPieChart(pieChartDark); // Suponiendo que tienes una función renderPieChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar pieChartDark
updatePieChartFromBackend();

// Función para obtener datos del backend y actualizar pieChartDark
async function updatePieDarkChartFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend para obtener los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/reservas-hotel-pai-tipo-dormitorio`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      const { labels, series } = response.data;

      // Actualiza las series del gráfico con los datos de series del backend
      pieChartDarkBedrooms.series = series;

      // Actualiza las etiquetas del gráfico con los datos de labels del backend
      pieChartDarkBedrooms.chartOptions.labels = labels;

      

      console.log('Objeto pieChartDarkBedrooms actualizado con datos del backend:', pieChartDarkBedrooms);

      // Aquí puedes llamar a una función o método que utilice el objeto pieChartDark
      // para renderizar el gráfico en la interfaz de usuario
      // renderPieChart(pieChartDark); // Suponiendo que tienes una función renderPieChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar pieChartDark
updatePieDarkChartFromBackend();

// Función para obtener datos del backend y actualizar pieChartDark
async function updateDonutChartFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend para obtener los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/reservas-hotel-pai`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      const { labels, series } = response.data;

      // Actualiza las series del gráfico con los datos de series del backend
      pieChart.series = series;

      // Actualiza las etiquetas del gráfico con los datos de labels del backend
      pieChart.chartOptions.labels = labels;

      

      console.log('Objeto pieChart actualizado con datos del backend:', pieChart);

      // Aquí puedes llamar a una función o método que utilice el objeto pieChartDark
      // para renderizar el gráfico en la interfaz de usuario
      // renderPieChart(pieChartDark); // Suponiendo que tienes una función renderPieChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar pieChartDark
updateDonutChartFromBackend();


// Función para obtener datos del backend y actualizar pieChartDark
async function updatePieChartDarkFromBackend() {
  try {
    // Realiza una solicitud GET al endpoint del backend para obtener los datos
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/reports/reservas-hotel-pai`, headers);

    // Verifica si la respuesta y los datos están presentes
    if (response && response.data) {
      const { labels, series } = response.data;

      // Actualiza las series del gráfico con los datos de series del backend
      pieChartDark.series = series;

      // Actualiza las etiquetas del gráfico con los datos de labels del backend
      pieChartDark.chartOptions.labels = labels;

      console.log('Objeto pieChartDark actualizado con datos del backend:', pieChartDark);

      // Aquí puedes llamar a una función o método que utilice el objeto pieChartDark
      // para renderizar el gráfico en la interfaz de usuario
      // renderPieChart(pieChartDark); // Suponiendo que tienes una función renderPieChart para mostrar el gráfico
    } else {
      console.error('Respuesta vacía o datos faltantes en la respuesta del backend.');
    }
  } catch (error) {
    console.error('Error al obtener datos desde el backend:', error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

// Llamar a la función para obtener los datos del backend y actualizar pieChartDark
updatePieChartDarkFromBackend();

export const stacked = {
  series: [
    {
      name: "Sales qualified",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Meeting",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "In negotiation",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: 0,
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    yaxis: {
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        offsetY: -3,
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    colors: [colors.primary, colors.info, colors.warning],
    grid: {
      show: true,
      borderColor: "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
  },
};

export const stackedDark = {
  series: [
    {
      name: "Sales qualified",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Meeting",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "In negotiation",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontFamily: "Inter",
      offsetY: 0,
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
      labels: {
        colors: "#CBD5E1",
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },

    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        offsetY: -3,
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    colors: [colors.primary, colors.info, colors.warning],
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
  },
};


export const basicArea = {
  series: [
    {
      data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#4669FA"],
    tooltip: {
      theme: "dark",
    },
    grid: {
      show: true,
    },
    fill: {
      type: "gradient",
      colors: "#4669FA",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 100, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Inter",
        },
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const basicAreaDark = {
  series: [
    {
      data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#4669FA"],
    tooltip: {
      theme: "dark",
    },
    grid: {
      show: true,
      borderColor: "#334155",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      colors: "#4669FA",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [50, 100, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#CBD5E1",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}