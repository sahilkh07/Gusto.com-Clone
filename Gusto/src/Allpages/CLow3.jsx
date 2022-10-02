import React from 'react';

let user = [
    {
        h:'85%',
        p:'of customers say Gusto is easier than their previous payroll provider'
    },
  {
    h: '94%',
    p: 'of customers are likely to recommend Gusto',
  },
  {
    h:"200,000+",
    p:"businesses using Gusto"
  },
  {
    h: '60%',
    p: 'partners say Gusto makes it easier to focus on advisory services',
  },
  {
    h: '14,000+',
    p: 'accounting firms — and more every day',
  },
  {
    h: '90%',
    p: 'of customers told us switching to Gusto is easy',
  },
];

function CLow3() {
  return (
    <div>
      <div>You and your clients are going to love Gusto.</div>
      <div>
        Build an incredible workplace and grow your business with Gusto's
        all-in-one platform.
      </div>

      <div style={{ display: 'flex' }}>
        
        
        {user.map((item)=>(
            <div><div>
                <h1>{item.h}</h1>
                <p>{item.p}</p>
                </div></div>
        ))}
      </div>
    </div>
  );
}

export default CLow3;
