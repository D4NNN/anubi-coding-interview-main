import { Controller, Get, Param } from "@nestjs/common"
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate"
import { AppService } from "./app.service"
import { Transaction } from "./database/transactions.types"
import { TransactionEntity } from "./entities/transaction.entity"

@Controller("v1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("transactions")
  getTransactions(): Transaction[] {
    return this.appService.getTransactions()
  }

  @Get("balances/:id")
  getBalanceByUser(@Param('id') id: string): Transaction[] {
    return this.appService.getBalanceByUser(id)
  }
}
