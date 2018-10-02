import { LivetchatModule } from './livetchat.module';

describe('LivetchatModule', () => {
  let livetchatModule: LivetchatModule;

  beforeEach(() => {
    livetchatModule = new LivetchatModule();
  });

  it('should create an instance', () => {
    expect(livetchatModule).toBeTruthy();
  });
});
