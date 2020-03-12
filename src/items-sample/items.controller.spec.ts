import { Test, TestingModule } from '@nestjs/testing';
import { ItemsSampleController } from './items-sample.controller';

describe('Items Controller', () => {
  let controller: ItemsSampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsSampleController],
    }).compile();

    controller = module.get<ItemsSampleController>(ItemsSampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
