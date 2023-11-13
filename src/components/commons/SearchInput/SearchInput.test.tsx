import { render, fireEvent } from "@testing-library/react";
import SearchInput from "@/components/commons/SearchInput";
import { useFoodsManageContext } from "@/contexts/FoodsManageContext";
import { Mock, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/contexts/FoodsManageContext", () => ({
  useFoodsManageContext: vi.fn(),
}));

describe("SearchInput", () => {
  beforeEach(() => {
    (useFoodsManageContext as Mock).mockReturnValue({
      setText: vi.fn(),
    });
  });

  it("calls setText with the search value when Enter key is pressed", () => {
    const setText = vi.fn();
    (useFoodsManageContext as Mock).mockReturnValue({ setText });

    const { getByPlaceholderText } = render(<SearchInput />);

    const inputElement = getByPlaceholderText("Enter restaurant name...");

    fireEvent.keyUp(inputElement, { keyCode: 13 });

    expect(setText).toHaveBeenCalledWith("");
  });

  it("calls setText with the search value when non-empty text is entered", () => {
    const setText = vi.fn();
    (useFoodsManageContext as Mock).mockReturnValue({ setText });

    const { getByPlaceholderText } = render(<SearchInput />);

    const inputElement = getByPlaceholderText("Enter restaurant name...");

    fireEvent.change(inputElement, { target: { value: "Test Restaurant" } });
    fireEvent.keyUp(inputElement, { keyCode: 13 });

    expect(setText).toHaveBeenCalledWith("Test Restaurant");
  });
});