import { render, screen } from '@testing-library/react';
import { it, describe, expect } from "vitest";

import {Ship} from './ship-component';

describe('App', () => {
  it('renders headline', () => {
    render(<Ship />);

    screen.debug();

    // check if App components renders headline
  });
});