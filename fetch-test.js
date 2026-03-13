fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `mutation { 
      createPricingRule(input: {
        plantId: 1, 
        clientType: "TEST FETCH FINAL", 
        costPerColor: 250, 
        linkPricing: "Por estructura", 
        margin300kg: 15, 
        margin500kg: 15, 
        margin1T: 15, 
        margin3T: 5, 
        margin5T: 5, 
        margin10T: 15, 
        margin20T: 15, 
        margin30T: 15
      }) { 
        id clientType alerts { volumeRange message } margin3T margin5T 
      } 
    }`
    })
}).then(r => r.json()).then(data => console.dir(data, { depth: null }));
