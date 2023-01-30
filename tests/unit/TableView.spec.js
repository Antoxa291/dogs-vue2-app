import { shallowMount, createLocalVue } from "@vue/test-utils";
import TableView from "@/views/TableView.vue";
import DogTable from "@/components/DogTable.vue";
import store from "@/store";

const localVue = createLocalVue();

describe("TableView", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TableView, {
      store,
      localVue,
    });
  });

  it("renders the component", () => {
    expect(wrapper.find(DogTable).exists()).toBe(true);
  });

  it("calls the fetchDogs action when created", () => {
    const fetchDogs = jest.fn();
    wrapper.setMethods({ fetchDogs });
    wrapper.vm.$nextTick(() => {
      expect(fetchDogs).toHaveBeenCalled();
    });
  });
});