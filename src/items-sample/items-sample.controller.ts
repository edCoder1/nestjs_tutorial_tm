import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req, // You can import and use Req and Res, it is not the NESTJS WAY though!
  Res, // You can import and use request and response, it is not the NESTJS WAY though!
  Param, // Access params. The NestJS way!
} from '@nestjs/common';
import { CreateItemDtoSample } from './dto/create-item-sample.dto';
import { Request, Response } from 'express'; // You can import and use Request and Response, it is not the NESTJS WAY though!

@Controller('items')
export class ItemsSampleController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): string {
    return 'GET ALL ITEMS ';
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
  }

  // Cleaner way of doing above route... could get messy if u reveive a lot of params?
  //   @Get(':id')
  //   findOne_v2(@Param('id') id): string {
  //     return `Item ${id}`;
  //   }

  @Post()
  create(@Body() createItemDto: CreateItemDtoSample): object {
    return {
      purpose: 'CREATE ITEM',
      received: {
        ...createItemDto,
      },
    };
  }

  @Put(':id')
  updateItem(
    @Body() updateItemDto: CreateItemDtoSample,
    @Param('id') id,
  ): object {
    return {
      purpose: 'UPDATE ITEM',
      id,
      received: {
        ...updateItemDto,
      },
    };
  }

  @Delete(':id')
  deleteItem(@Param('id') id): string {
    return `DELETE ITEM ${id}`;
  }
}
