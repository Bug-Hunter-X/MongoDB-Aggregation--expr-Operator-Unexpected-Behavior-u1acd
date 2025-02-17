```javascript
const query = { $expr: { $gt: [ { $toInt: '$likes' }, 1000 ] } };
const result = await db.collection('posts').aggregate([ { $match: query } ]).toArray();
```