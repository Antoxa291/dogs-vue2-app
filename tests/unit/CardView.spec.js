import { shallowMount } from "@vue/test-utils";
import CardView from "@/components/CardView.vue";
import DogCard from "@/components/DogCard.vue";

describe("TableView.vue", () => {
  it("renders two pagination components", () => {
    const wrapper = shallowMount(CardView);
    expect(wrapper.findAll("el-pagination-stub").length).toBe(2);
  });

  it("renders a DogCard component for each dog", () => {
    const wrapper = shallowMount(CardView, {
      data() {
        return {
          dogs: [{ name: "dog1" }, { name: "dog2" }, { name: "dog3" }],
        };
      },
    });
    expect(wrapper.findAll(DogCard).length).toBe(3);
  });

  it("handles next page change", () => {
    const wrapper = shallowMount(CardView);
    wrapper.vm.handleNext(2);
    expect(wrapper.vm.currentPage).toBe(2);
  });
});
