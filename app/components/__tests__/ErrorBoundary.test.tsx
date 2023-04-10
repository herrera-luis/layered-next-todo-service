import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../ErrorBoundary";
import React from 'react';


const ProblematicComponent = () => {
    throw new Error("An error occurred in the component");
};

describe("ErrorBoundary", () => {
    test("renders fallback UI when child component throws an error", () => {
        jest.spyOn(console, "error").mockImplementation(() => { });

        render(
            <ErrorBoundary>
                <ProblematicComponent />
            </ErrorBoundary>
        );

        expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

        jest.restoreAllMocks();
    });

    test("renders child component when no error occurs", () => {
        const { getByText } = render(
            <ErrorBoundary>
                <div>Everything is fine</div>
            </ErrorBoundary>
        );

        expect(getByText("Everything is fine")).toBeInTheDocument();
    });
});