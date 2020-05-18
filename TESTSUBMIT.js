URL = 'https://script.google.com/macros/s/AKfycbx6PMkhl5-4LzMo3Hyu4TJaW0cmIDymLGLaHVRbHiCHT5ugTpM/exec'   //'https://script.google.com/macros/s/AKfycbzjSUkwH1D11ww6CsDvicqnueaLTgrmIjjyPTBDfvatDfN6mbs/exec'


//https://script.google.com/macros/s/AKfycbwCO4I_ZKn-aElyweDBRaBCHQ6VIMwBpBYKmgLBizV_TMimnKCC/exec
//https://script.google.com/macros/s/AKfycbxLqEjhQIMZzwrGdYmouQXmfWDcMSASIG0RFx7mTB6LYQrpPL4/exec
//https://script.google.com/macros/s/AKfycbx6PMkhl5-4LzMo3Hyu4TJaW0cmIDymLGLaHVRbHiCHT5ugTpM/exec
//            1EHyVziI0R3JawR85Fkn3XIn5WpXbn_GjlHQxlRlxPnc
// AKfycbxLqEjhQIMZzwrGdYmouQXmfWDcMSASIG0RFx7mTB6LYQrpPL4          AKfycbxLqEj1EHyVziI0R3JawR85Fkn3XIn5WpXbn_GjlHQxlRlxPnc

/*
function submit(data) {
    const url = `${URL}?${new URLSearchParams(data).toString()}`
    console.log(url)
    fetch(url,
    { method: 'GET' })
    .then( result => console.log(result) )

    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
}
*/


function submit(data) {
    const url = `${URL}?${new URLSearchParams(data).toString()}`
    console.log(url)
    b = fetch(url,
    { method: 'POST', 
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then( result => {console.log(result); b = result; 
        console.log('YOO'); 
        console.log(b)
        c = new URLSearchParams(b).getAll()
    })
    return c
};

submit({ age: 42, gender: 'male', education: 'bachelor' })

