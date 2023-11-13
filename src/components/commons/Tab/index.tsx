import { useMemo } from "react";
import { TabProps } from "@/types";
import "./Tab.scss";
import { useCategories } from "@/query/foods";
import { DEFAULT_ITEMS, useFoodsManageContext } from "@/contexts/FoodsManageContext";

export default function Tab() {
  const { data } = useCategories();
  const { activeTab, setActiveTab, setVisibleItems } = useFoodsManageContext();
  const tabs: TabProps[] = useMemo(() => {
    if (data) {
      return [
        {
          id: "",
          name: "All",
        },
        ...data,
      ];
    }
    return [
      {
        id: "",
        name: "All",
      },
    ];
  }, [data]);

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
    setVisibleItems(DEFAULT_ITEMS);
  };

  return (
    <div className="tab">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={activeTab === tab.id ? "tab-item active" : "tab-item"}
          onClick={() => openTab(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
