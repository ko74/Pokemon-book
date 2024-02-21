import { TabsProps } from "../types";

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="flex justify-center gap-5 bg-secondary-main rounded-full p-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`py-2 rounded-full min-w-10 w-full ${
            activeTab === index ? "bg-white px-0" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
