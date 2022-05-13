import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { AppService } from "./app.service"
import { Asset, Transaction } from "./database/transactions.types"


interface interestDTO {
  user: string;
  asset: string;
}

@Controller("v1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("transactions")
  getTransactions(): Transaction[] {
    return this.appService.getTransactions()
  }

  @Get("transactions/:id")
  getTransactionsByUser(@Param('id') id: string): Transaction[] {
    return this.appService.getTransactionsByUser(id)
  }

  @Get("users")
  getUsers(): string[] {
    return this.appService.getUsers()
  }

  @Get("balances/:id")
  getBalanceByUser(@Param('id') id: string): Transaction[] {
    return this.appService.getBalanceByUser(id)
  }

  @Post("interest")
  postInterest(@Body() body: interestDTO) {
    return this.appService.processUserInterests(body.asset,body.user)
  }
}
