<template>
  <div
    class="mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
    id="breakdown"
  >
    <Cta
      :total="
        lineItems
          .filter((o) => o.id != 20)
          .reduce((a, c) => a + c.hours * c.rate, 0)
      "
    />
    <div class="sm:flex sm:items-center divide-y divide-gray-500 mt-32">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Breakdown</h1>
        <p class="mt-2 text-sm text-gray-700">
          For {{ companyName }} on
          <time :datetime="new Date()">August 1, 2022</time>
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <!-- <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Print</button> -->
      </div>
    </div>
    <div class="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0 mb-32">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              class="
                py-3.5
                pl-4
                pr-3
                text-left text-sm
                font-semibold
                text-gray-900
                sm:pl-6
                md:pl-0
              "
            >
              Item
            </th>
            <th
              scope="col"
              class="
                py-3.5
                pl-4
                pr-3
                text-left text-sm
                font-semibold
                text-gray-900
                sm:pl-6
                md:pl-0
              "
            >
              Billing frequency
            </th>
            <th
              scope="col"
              class="
                hidden
                py-3.5
                px-3
                text-right text-sm
                font-semibold
                text-gray-900
                sm:table-cell
              "
            >
              Quantity
            </th>
            <th
              scope="col"
              class="
                hidden
                py-3.5
                px-3
                text-right text-sm
                font-semibold
                text-gray-900
                sm:table-cell
              "
            >
              List Price
            </th>
            <th
              scope="col"
              class="
                py-3.5
                pl-3
                pr-4
                text-right text-sm
                font-semibold
                text-gray-900
                sm:pr-6
                md:pr-0
              "
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="project in lineItems"
            :key="project.id"
            class="border-b border-gray-200"
          >
            <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
              <div class="font-medium text-gray-900">{{ project.name }}</div>
              <div class="mt-0.5 text-gray-500 sm:hidden">
                {{ project.hours }} hours at {{ project.rate }}
              </div>
            </td>
            <td>
              <span
                :class="[
                  project.type === 'Annually'
                    ? 'bg-purple-100 text-purple-800'
                    : 'text-pink-800 bg-pink-100',
                  `inline-flex
                  items-center
                  rounded-full
                  px-2.5
                  py-0.5
                  text-xs
                  font-medium
                  `,
                ]"
                >{{ project.type }}</span
              >
            </td>
            <td
              class="
                hidden
                py-4
                px-3
                text-right text-sm text-gray-500
                sm:table-cell
              "
            >
              {{ project.hours }}
            </td>
            <td
              class="
                hidden
                py-4
                px-3
                text-right text-sm text-gray-500
                sm:table-cell
              "
            >
              ${{ project.rate.toLocaleString() }}
            </td>
            <td
              class="
                py-4
                pl-3
                pr-4
                text-right text-sm text-gray-500
                sm:pr-6
                md:pr-0
              "
            >
              ${{ (project.rate * project.hours).toLocaleString() }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th
              scope="row"
              colspan="3"
              class="
                hidden
                pl-6
                pr-3
                pt-6
                text-right text-sm
                font-normal
                text-gray-500
                sm:table-cell
                md:pl-0
              "
            >
              Subtotal
            </th>
            <th
              scope="row"
              class="
                pl-4
                pr-3
                pt-6
                text-left text-sm
                font-normal
                text-gray-500
                sm:hidden
              "
            >
              Subtotal
            </th>
            <td
              class="
                pl-3
                pr-4
                pt-6
                text-right text-sm text-gray-500
                sm:pr-6
                md:pr-0
              "
            >
              ${{
                lineItems
                  .reduce((a, c) => a + c.hours * c.rate, 0)
                  .toLocaleString()
              }}
            </td>
          </tr>
          <tr>
            <th></th>
            <th
              scope="row"
              colspan="3"
              class="
                hidden
                pl-6
                pr-3
                pt-4
                text-right text-sm
                font-normal
                text-gray-500
                sm:table-cell
                md:pl-0
              "
            >
              Discount
            </th>
            <th
              scope="row"
              class="
                pl-4
                pr-3
                pt-4
                text-left text-sm
                font-normal
                text-gray-500
                sm:hidden
              "
            >
              Discount
            </th>
            <td
              class="
                pl-3
                pr-4
                pt-4
                text-right text-sm text-gray-500
                sm:pr-6
                md:pr-0
              "
            >
              $0.00
            </td>
          </tr>
          <tr>
            <th></th>
            <th
              scope="row"
              colspan="3"
              class="
                hidden
                pl-6
                pr-3
                pt-4
                text-right text-sm
                font-semibold
                text-gray-900
                sm:table-cell
                md:pl-0
              "
            >
              Total
            </th>
            <th
              scope="row"
              class="
                pl-4
                pr-3
                pt-4
                text-left text-sm
                font-semibold
                text-gray-900
                sm:hidden
              "
            >
              Total
            </th>
            <td
              class="
                pl-3
                pr-4
                pt-4
                text-right text-sm
                font-semibold
                text-gray-900
                sm:pr-6
                md:pr-0
              "
            >
              ${{
                lineItems
                  .reduce((a, c) => a + c.hours * c.rate, 0)
                  .toLocaleString()
              }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      workflows: localStorage.getItem("workflows") ?? 3,
      selectedPlan: localStorage.getItem("tier") ?? "Professional",
      companyName: localStorage.getItem("companyName") ?? "ACME, Inc.",
    };
  },
  computed: {
    workflowCost() {
      let includedWorkflows = 0;
      if (this.selectedPlan === "Professional") includedWorkflows = 3;
      else if (this.selectedPlan === "Team") includedWorkflows = 5;
      else includedWorkflows = 10;
      const effectiveWorkflows = this.workflows - includedWorkflows;
      if (this.workflows <= includedWorkflows) return 0;
      else if (effectiveWorkflows <= 10) return 2000 * effectiveWorkflows;
      else if (effectiveWorkflows <= 30)
        return (effectiveWorkflows - 10) * 1000 + 10 * 2000;
      else if (effectiveWorkflows <= 100)
        return (effectiveWorkflows - 30) * 500 + 20 * 1000 + 10 * 2000;
      else if (effectiveWorkflows <= 200)
        return (
          (effectiveWorkflows - 100) * 125 + 70 * 500 + 20 * 1000 + 10 * 2000
        );
      else
        return (
          (effectiveWorkflows - 200) * 100 +
          100 * 125 +
          70 * 500 +
          20 * 1000 +
          10 * 2000
        );
    },
    lineItems() {
      let arr = [];
      let rate = 0;
      let extra_workflows = 0;
      let includedWorkflows = 0;
      let includedWorkspaces = 1;
      if (this.selectedPlan === "Professional") includedWorkflows = 3;
      else if (this.selectedPlan === "Team")
        (includedWorkflows = 5), (includedWorkspaces = 2);
      else includedWorkflows = 10;
      let extra_workspaces =
        (localStorage.getItem("workspaces") ?? 1) - includedWorkspaces;
      const effectiveWorkflows = this.workflows - includedWorkflows;
      if (this.workflows <= includedWorkflows) extra_workflows = 0;
      else if (effectiveWorkflows <= 10)
        extra_workflows = 2000 * effectiveWorkflows;
      else if (effectiveWorkflows <= 30)
        extra_workflows = (effectiveWorkflows - 10) * 1000 + 10 * 2000;
      else if (effectiveWorkflows <= 100)
        extra_workflows =
          (effectiveWorkflows - 30) * 500 + 20 * 1000 + 10 * 2000;
      else if (effectiveWorkflows <= 200)
        extra_workflows =
          (effectiveWorkflows - 100) * 125 + 70 * 500 + 20 * 1000 + 10 * 2000;
      else
        extra_workflows =
          (effectiveWorkflows - 200) * 100 +
          100 * 125 +
          70 * 500 +
          20 * 1000 +
          10 * 2000;

      if (localStorage.getItem("tier") === "Professional") rate = 18000;
      if (localStorage.getItem("tier") === "Team") {
        rate = 30000;
      }
      if (localStorage.getItem("tier") === "Enterprise") {
        rate = 60000;
      }
      arr.push({
        id: 1,
        type: "Annually",
        name: (localStorage.getItem("tier") ?? "Professional") + " Plan",
        hours: 1,
        rate,
      });
      if (effectiveWorkflows >= 0)
        arr.push({
          id: 2,
          type: "Annually",
          name: "Extra workflows",
          hours: effectiveWorkflows <= 0 ? 0 : effectiveWorkflows,
          rate:
            extra_workflows /
            (effectiveWorkflows <= 0 ? 1 : effectiveWorkflows),
        });
      if (
        localStorage.getItem("tier") !== "Enterprise" &&
        extra_workspaces > 0
      ) {
        arr.push({
          id: 4,
          type: "Annually",
          name: "Extra workspaces",
          hours: extra_workspaces,
          rate: 6000,
        });
      }
      if (localStorage.getItem("hipaa") === "true")
        arr.push({
          id: 4,
          type: "Annually",
          name: "HIPAA",
          hours: 1,
          rate: localStorage.getItem("tier") === "Enterprise" ? 0 : 9000,
        });
      if (localStorage.getItem("sso") === "true")
        arr.push({
          id: 4,
          type: "Annually",
          name: "SSO",
          hours: 1,
          rate: localStorage.getItem("tier") === "Enterprise" ? 0 : 3000,
        });
      if (localStorage.getItem("on-prem") === "true")
        arr.push({
          id: 4,
          type: "Annually",
          name: "On premise",
          hours: 1,
          rate: localStorage.getItem("tier") === "Enterprise" ? 0 : 12000,
        });
      if (localStorage.getItem("log_streaming") === "true")
        arr.push({
          id: 4,
          type: "Annually",
          name: "Log streaming",
          hours: 1,
          rate: localStorage.getItem("tier") === "Enterprise" ? 0 : 6000,
        });
      if (localStorage.getItem("log_retention") === "true")
        arr.push({
          id: 4,
          type: "Annually",
          name: "Custom log retention",
          hours: 1,
          rate: localStorage.getItem("tier") === "Enterprise" ? 0 : 6000,
        });
      if (localStorage.getItem("support") === "Standard") {
        arr.push({
          id: 4,
          type: "Annually",
          name: "Standard Support",
          hours: 1,
          rate: 0,
        });
      } else if (localStorage.getItem("support") !== "Standard") {
        arr.push({
          id: 4,
          type: "Annually",
          name: "Premium Support",
          hours: 1,
          rate: (rate + extra_workflows) * 0.15,
        });
      }
      if (localStorage.getItem("onboarding") === "Starter") {
        arr.push({
          id: 20,
          type: "One-time",
          name: "FREE Onboarding",
          hours: 4,
          rate: 0,
        });
      } else if (localStorage.getItem("onboarding") === "Foundations I") {
        arr.push({
          id: 20,
          type: "One-time",
          name: "Onboarding Lvl I",
          hours: 20,
          rate: 250,
        });
      } else if (localStorage.getItem("onboarding") === "Foundations II") {
        arr.push({
          id: 20,
          type: "One-time",
          name: "Onboarding Lvl II",
          hours: 40,
          rate: 250,
        });
      }
      if (localStorage.getItem("success") === "Advisory") {
        arr.push({
          id: 20,
          type: "Annually",
          name: "Advisory Pack",
          hours: 12,
          rate: 250,
        });
      } else if (localStorage.getItem("success") === "Advisory + Delivery") {
        arr.push({
          id: 20,
          type: "Annually",
          name: "Advisory + Delivery Pack",
          hours: 24,
          rate: 250,
        });
      }

      return arr.filter((o) => o.rate > 0);
      s;
    },
  },
};
</script>