import { render, fireEvent } from "@testing-library/react";
import Tab from "@/components/commons/Tab/index";
import { useFoodsManageContext } from "@/contexts/FoodsManageContext";
import { useCategories } from "@/query/foods";
import { Mock, describe, expect, it, vi } from "vitest";

vi.mock("@/contexts/FoodsManageContext");
vi.mock("@/query/foods");

describe("Tab component", () => {
  it("should render tabs correctly", () => {
    const mockCategories = [
      { id: "1", name: "Category 1" },
      { id: "2", name: "Category 2" },
    ];
    const mockUseCategories = useCategories as Mock;
    mockUseCategories.mockReturnValue({ data: mockCategories });

    const mockSetActiveTab = vi.fn();
    const mockSetVisibleItems = vi.fn();
    const mockUseFoodsManageContext = useFoodsManageContext as Mock;
    mockUseFoodsManageContext.mockReturnValue({
      activeTab: "1",
      setActiveTab: mockSetActiveTab,
      setVisibleItems: mockSetVisibleItems,
    });

    const { getByText } = render(<Tab />);

    expect(getByText("All")).toBeInTheDocument();
    expect(getByText("Category 1")).toBeInTheDocument();
    expect(getByText("Category 2")).toBeInTheDocument();
  });

  it("should call setActiveTab and setVisibleItems when a tab is clicked", () => {
    const mockSetActiveTab = vi.fn();
    const mockSetVisibleItems = vi.fn();
    const mockUseFoodsManageContext = useFoodsManageContext as Mock;
    mockUseFoodsManageContext.mockReturnValue({
      activeTab: "",
      setActiveTab: mockSetActiveTab,
      setVisibleItems: mockSetVisibleItems,
    });

    const { getByText } = render(<Tab />);
    const tabButton = getByText("Category 1");

    fireEvent.click(tabButton);

    expect(mockSetActiveTab).toHaveBeenCalledWith("1");
    expect(mockSetVisibleItems).toHaveBeenCalledWith(9);
  });
});