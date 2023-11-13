import { render, fireEvent } from "@testing-library/react";
import Cards from "@/components/contents/Cards";
import { useFoodsManageContext } from "@/contexts/FoodsManageContext";
import { Mock, describe, expect, it, vi } from "vitest";

vi.mock("@/contexts/FoodsManageContext");

describe("Cards component", () => {
  it("renders correctly", () => {
    const mockFoods = [
      { id: 1, name: "Food 1" },
      { id: 2, name: "Food 2" },
    ];

    const mockUseFoodsManageContext = useFoodsManageContext as Mock;
    mockUseFoodsManageContext.mockReturnValue({
      foods: mockFoods,
      isShowMore: true,
      visibleItems: 9,
      setVisibleItems: vi.fn(),
    });

    const { getByText } = render(<Cards />);

    expect(getByText("Food 1")).toBeInTheDocument();
    expect(getByText("Food 2")).toBeInTheDocument();
  });

  it("calls setVisibleItems when the 'Show More' button is clicked", () => {
    const mockUseFoodsManageContext = useFoodsManageContext as Mock;
    const mockSetVisibleItems = vi.fn();
    mockUseFoodsManageContext.mockReturnValue({
      foods: [],
      isShowMore: true,
      visibleItems: 9,
      setVisibleItems: mockSetVisibleItems,
    });

    const { getByText } = render(<Cards />);
    const showMoreButton = getByText("+ Show More");

    fireEvent.click(showMoreButton);

    expect(mockSetVisibleItems).toHaveBeenCalledWith(18);
  });
});