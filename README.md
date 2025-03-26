# Hexa-Space

## Getting Started

First checkout the repository and run the following command to install dependencies:

```bash
npm install
```

Run tests. Currently, they will fail for the first time but if you run them again they will work.

```bash
npm run test
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Exercises 1: May the 4th be with you

Goal of this exercise is to show space-ships that are on sale.

Hint: There is an example for a styled sales label in line
`src/bounded_contexts/space-ship-store-front/ui-adapter/ship-component.tsx:49` you can use to display the sales label.

### Step 1

The first step is to mark a space-ship on sale if a space-ship is on sale.

### Step 2

If a ship is on sale then the price is reduced by 10%. The old price should also be displayed but crossed out.

### Step 3

The customer does not have to pay an interest rate if the space-ship is on sale.

### Step 4

The sales banner and the price reduction should also apply on May the 4th on all products.

## Exercise 2: An elegant Weapon for a more civilized age

Goal of this exercise is to calculate the weapon power for the weapon inventory. If the imperial controller appear, you
have to have a list of your weapons and weapon power ready.

### Step 1

Display the number of weapons of each type.

## Step 2

Assign a weapon power to each kind of weapon and display a summarized weapon power per weapon type

## Step 3

Display a aggregated weapon power for the whole inventory

