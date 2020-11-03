import { Test, TestingModule } from '@nestjs/testing';
import { OrdernameController } from './ordername.controller';

describe('OrdernameController', () => {
  let controller: OrdernameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdernameController],
    }).compile();

    controller = module.get<OrdernameController>(OrdernameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
