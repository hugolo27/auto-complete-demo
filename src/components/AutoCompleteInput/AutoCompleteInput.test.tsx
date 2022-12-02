import React from 'react';
import { render, screen } from '@testing-library/react';
import AutoCompleteInput from "./AutoCompleteInput";
import {act} from "react-dom/test-utils";

test('AutoCompleteInput should render the input', async() => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(<AutoCompleteInput/>));
    const inputElement = screen.getByTestId(/input/i);
    expect(inputElement).toBeDefined();
});
