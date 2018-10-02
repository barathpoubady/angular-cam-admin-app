import { LivetchatRoutingModule } from './livetchat-routing.module';

describe('LivetchatRoutingModule', () => {
  let livetchatRoutingModule: LivetchatRoutingModule;

  beforeEach(() => {
    livetchatRoutingModule = new LivetchatRoutingModule();
  });

  it('should create an instance', () => {
    expect(livetchatRoutingModule).toBeTruthy();
  });
});
