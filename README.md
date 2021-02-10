# Geocaching Helpers

This repository contains a list of helpers to find some geocaching caches. It currently contains a single function, but will probably grow over time, depending on my needs.

## Usage

Run `yarn start` and reply to the prompt.

As it supports a single helper for now, the `string to digit` helper would be automatically selected.

## Helpers

### String to Digit

Some enigmas require to find string solutions to questions. Yet, the expected output is generally a number to insert into a set of geographical coordinates.

One of the used methods is to replace the text output (for instance `CATHEDRAL`) by its letter positions, and then sum them up until you have a single number:

```
CATHEDRAL => 3 + 1 + 20 + 8 + 5 + 4 + 18 + 1 + 12 = 72
72 => 7 + 2 = 9
```

Here, `CATHEDRAL` would be equivalent to `9`.
