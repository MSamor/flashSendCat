import { Test, TestingModule } from '@nestjs/testing';
import { DakaController } from './daka.controller';

describe('DakaController', () => {
  let controller: DakaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DakaController],
    }).compile();

    controller = module.get<DakaController>(DakaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
