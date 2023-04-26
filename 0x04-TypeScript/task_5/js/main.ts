interface MajorCredits {
  credit: number;
  _brand: 'Major';
}

interface MinorCredits {
  credit: number;
  _brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MajorCredits = {
    credit: sum,
    _brand: 'Major',
  };

  return obj;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MinorCredits = {
    credit: sum,
    _brand: 'Minor',
  };

  return obj;
}
