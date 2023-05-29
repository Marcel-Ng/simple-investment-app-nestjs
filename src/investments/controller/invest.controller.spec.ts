import { Test, TestingModule } from '@nestjs/testing';
import { QouteController } from './invest.controller';
import { QouteService } from '../service/investment.service';
import { CreateQouteDto } from '../dto/create-investment.dto';

describe('QouteController', () => {
  let controller: QouteController;
  let spyService: QouteService

  beforeEach(async () => {
    const QouteServiceProvider = {
        provide: QouteService,
        useFactory: () => ({
            getRandom: jest.fn(() => {}),
            findAll: jest.fn(() => [])
        })
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [QouteController],
      providers: [QouteService, QouteServiceProvider]
    }).compile();

    controller = module.get<QouteController>(QouteController);
    spyService = module.get<QouteService>(QouteService)
  });

  it('calling get all qoutes', () => {
    // QouteCotroller.GetAllQoute()
    controller.GetAllQoute()
    expect(spyService.findAll).toHaveBeenCalled();
  });
});

// import { QouteEntity } from '../entities/qoute.entity';
// import { QouteService } from '../service/qoute.service';
// import { QouteController } from './qoute.controller';
// import {Repository} from 'typeorm'


// describe('CatsController', () => {
//   let catsController: QouteController;
//   let catsService: QouteService;
//   let qouteRepository: Repository<QouteEntity>

//   beforeEach(() => {
//     catsService = new QouteService(qouteRepository);
//     catsController = new QouteController(catsService);
//   });

//   describe('findAll', () => {
//     it('should return an array of cats', async () => {
//       const result = ['test'];
//     //   const result = Promise<any>;
//       jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

//       expect(await catsController.GetAllQoute()).toBe(result);
//     });
//   });
// });
