import { shallow } from "enzyme";
import CardList from "./CardList";

it("expects to render the CardList component", () => {
  const mockRobots = [
    {
      key: 10,
      id: 1,
      name: "John Snow",
      email: "john@example.com",
    },
    {
      key: 11,
      id: 2,
      name: "Kelly Gale",
      email: "kelly@example.com",
    },
  ];
  const wrap = shallow(<CardList error="" robots={mockRobots} />);
  expect(wrap).toMatchSnapshot();
});
