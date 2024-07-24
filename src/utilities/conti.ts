export enum EmailTypes {
  Inf,
  Kon,
}

export default function (emailType: EmailTypes) {
  // mailto:
  const mContiR = ['bQ', 'YQ', 'aQ', 'bA', 'dA', 'bw', 'Og'];
  let mContiP = '';
  for (let i = 0; i < mContiR.length; i++) {
    mContiP += atob(mContiR[i] + '==');
  }

  let aContiR: string[] = [];
  // info is default
  aContiR = ['aQ', 'bg', 'Zg', 'bw'];
  if (emailType == EmailTypes.Kon) {
    // kontakt
    aContiR = ['aw', 'bw', 'bg', 'dA', 'YQ', 'aw', 'dA'];
  }

  let aContiP = '';
  for (let i = 0; i < aContiR.length; i++) {
    aContiP += atob(aContiR[i] + '==');
  }

  // @andrei-see.com
  const dContiR = [
    'QA',
    'YQ',
    'bg',
    'ZA',
    'cg',
    'ZQ',
    'aQ',
    'LQ',
    'cw',
    'ZQ',
    'ZQ',
    'Lg',
    'Yw',
    'bw',
    'bQ',
  ];
  let dContiP = '';
  for (let i = 0; i < dContiR.length; i++) {
    dContiP += atob(dContiR[i] + '==');
  }

  return { mContiP, aContiP, dContiP };
}
