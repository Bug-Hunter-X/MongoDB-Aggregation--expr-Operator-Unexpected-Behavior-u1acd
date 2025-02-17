# MongoDB Aggregation $expr Operator Unexpected Behavior

This repository demonstrates an uncommon bug related to the `$expr` operator in MongoDB aggregation pipelines. The issue arises when using comparison operators like `$gt` within `$expr`, leading to unexpected results or errors.  The provided solution offers a workaround for this behavior.

## Problem Description

When using `$gt` (greater than) within the `$expr` operator for comparing numerical fields,  the aggregation may not return the expected results.  It may incorrectly include or exclude documents based on the comparison.

## Solution

The solution involves using the `$toInt` operator to explicitly convert the fields involved in the comparison to integers before the comparison is performed. This ensures that the comparison is performed on numerically consistent values, thereby resolving the unexpected behavior.
