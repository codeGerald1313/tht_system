<template>
  <div>
    <Breadcrumb />

  </div>
</template>
<script>
import Card from "@/components/Card";

import CompanyTable from "./Analytics-Component/CompanyTable";
import {
  columnCharthome,
  columnCharthomeDark,
  shapeLine1,
  shapeLine2,
  shapeLine3,
  mostSales,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import Map from "./Analytics-Component/Map";
import SelectMonth from "./Analytics-Component/SelectMonth";
import Breadcrumb from "./Analytics-Component/Breadcrumbs2";
import window from "@/mixins/window";

// image import
import widget1 from "@/assets/images/all-img/widget-bg-1.png"
import activity1 from "@/assets/images/users/user-1.jpg"
import activity2 from "@/assets/images/users/user-2.jpg"
import activity3 from "@/assets/images/users/user-3.jpg"
import activity4 from "@/assets/images/users/user-4.jpg"
import activity5 from "@/assets/images/users/user-5.jpg"
import activity6 from "@/assets/images/users/user-6.jpg"

export default {
  mixins: [window],
  components: {
    Card,
    CompanyTable,
    Map,
    DropEvent,
    SelectMonth,
    Breadcrumb,
  },
  data() {
    return {
      widget1,
      columnCharthome,
      columnCharthomeDark,

      mostSales,
      fillterMap: "usa",
      statistics: [
        {
          name: shapeLine1,
          title: "Totel revenue",
          count: "3,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
        },
        {
          name: shapeLine2,
          title: "Products sold",
          count: "564",
          bg: "bg-[#FFEDE5] dark:bg-slate-900	",
        },
        {
          name: shapeLine3,
          title: "Growth",
          count: "+5.0%",
          bg: "bg-[#EAE5FF] dark:bg-slate-900	",
        },
      ],
      activity: [
        {
          id: 1,
          img: activity1,
        },
        {
          id: 2,
          img: activity2,
        },
        {
          id: 3,
          img: activity3,
        },
        {
          id: 4,
          img: activity4,
        },
        {
          id: 5,
          img: activity5,
        },
        {
          id: 6,
          img: activity6,
        },
        {
          id: 7,
          img: activity1,
        },
        {
          id: 8,
          img: activity4,
        },
        {
          id: 9,
          img: activity3,
        },
      ],
    };
  },

  computed: {
    columnCharthomeComputed() {
      return {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
              columnWidth: "45%",
            },
          },
          legend: {
            show: true,
            position: "top",
            horizontalAlign: "right",
            fontSize: "12px",
            fontFamily: "Inter",
            offsetY: -30,
            markers: {
              width: 8,
              height: 8,
              offsetY: -1,
              offsetX: -5,
              radius: 12,
            },
            labels: {
              colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
            },
            itemMargin: {
              horizontal: 18,
              vertical: 0,
            },
          },
          title: {
            text: "Revenue Report",
            align: "left",

            offsetX: this.$store.themeSettingsStore.direction ? "0%" : 0,
            offsetY: 13,
            floating: false,
            style: {
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "Inter",
              color: this.$store.themeSettingsStore.isDark ? "#fff" : "#0f172a",
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
            opposite: this.$store.themeSettingsStore.direction ? true : false,
            labels: {
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
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
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
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
          colors: ["#4669FA", "#0CE7FA", "#FA916B"],
          grid: {
            show: true,
            borderColor: this.$store.themeSettingsStore.isDark ? "#334155" : "#E2E8F0",
            strokeDashArray: 10,
            position: "back",
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                legend: {
                  position: "bottom",
                  offsetY: 8,
                  horizontalAlign: "center",
                },
                plotOptions: {
                  bar: {
                    columnWidth: "80%",
                  },
                },
              },
            },
          ],
        },
      };
    },
  },
};
</script>
<style lang=""></style>
