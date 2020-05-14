import { RelativeTextTimePipe } from './relative-text-time.pipe';

describe('RelativeTextTimePipe', () => {
  it('create an instance', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('moins d\'une minute', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(30)).toEqual('moins d\'une minute');
  });

  it('1 minute', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(77)).toEqual('1 minute');
  });

  it('3 minutes', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(181)).toEqual('3 minutes');
  });

  it('1 heure', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600)).toEqual('1 heure');
  });

  it('2 heures', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600 * 2.5)).toEqual('2 heures');
  });

  it('1 jour', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600 * 24)).toEqual('1 jour');
  });

  it('3 jours', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600 * 24 * 3)).toEqual('3 jours');
  });

  it('1 month', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600 * 24 * 31)).toEqual('1 mois');
  });

  it('2 month', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600 * 24 * 31 * 2)).toEqual('2 mois');
  });

  it('1 année', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600 * 24 * 370)).toEqual('1 année');
  });

  it('2 années', () => {
    const pipe = new RelativeTextTimePipe();
    expect(pipe.transform(3600 * 24 * 370 * 2)).toEqual('2 années');
  });
});
