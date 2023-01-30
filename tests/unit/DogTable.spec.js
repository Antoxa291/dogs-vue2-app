import { shallowMount } from "@vue/test-utils";
import DogTable from "./DogTable.vue";

describe("DogTable component", () => {
  let wrapper;
  const dogs = [
    {
      name: "Max",
      breed: "Golden Retriever",
      registration: "AKC",
      birth: "01/01/2020",
      last_update: "Yesterday"
    },
    {
      name: "Buddy",
      breed: "Labrador Retriever",
      registration: "AKC",
      birth: "02/01/2020",
      last_update: "Today"
    }
  ];

  beforeEach(() => {
    wrapper = shallowMount(DogTable, {
      propsData: {
        dogs
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders the component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the table with the passed dogs prop", () => {
    const tableData = wrapper.find("el-table-stub").props().data;
    expect(tableData).toBe(dogs);
  });

  it("emits a handleClick event when the Detail button is clicked", () => {
    const button = wrapper.find("el-button-stub");
    button.vm.$emit("click");
    expect(wrapper.emitted().handleClick).toBeTruthy();
  });
});
