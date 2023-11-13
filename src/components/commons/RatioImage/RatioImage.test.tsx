import { render, waitFor, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AspectRatioComponent from ".";

describe("AspectRatioComponent", () => {
  it('renders with "gift" promotion', async () => {
    render(
      <AspectRatioComponent src="testurl.com/example.jpg" promotion="gift" />
    );

    const aspectRatioContainer = screen.getByTestId("aspect-ratio-container");
    const image = screen.getByAltText("food image");

    // Simulate image load
    image.dispatchEvent(new Event("load"));

    await waitFor(() => {
      expect(aspectRatioContainer).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(screen.getByTestId("gift-icon")).toBeInTheDocument();
      expect(screen.getByTestId("aspect-ratio-pill")).toBeInTheDocument();
    });
  });

  it('renders with "discount" promotion', async () => {
    render(
      <AspectRatioComponent
        src="testurl.com/example.jpg"
        promotion="discount"
      />
    );

    const aspectRatioContainer = screen.getByTestId("aspect-ratio-container");
    const image = screen.getByAltText("food image");

    // Simulate image load
    image.dispatchEvent(new Event("load"));

    await waitFor(() => {
      expect(aspectRatioContainer).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(screen.getByTestId("discount-pill")).toBeInTheDocument();
      expect(screen.getByTestId("aspect-ratio-pill")).toBeInTheDocument();
    });
  });

  it('renders with "1+1" promotion', async () => {
    render(
      <AspectRatioComponent
        src="testurl.com/example.jpg"
        promotion="1+1"
      />
    );

    const aspectRatioContainer = screen.getByTestId("aspect-ratio-container");
    const image = screen.getByAltText("food image");

    // Simulate image load
    image.dispatchEvent(new Event("load"));

    await waitFor(() => {
      expect(aspectRatioContainer).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(screen.getByTestId("11-pill")).toBeInTheDocument();
      expect(screen.getByTestId("aspect-ratio-pill")).toBeInTheDocument();
    });
  });
});
