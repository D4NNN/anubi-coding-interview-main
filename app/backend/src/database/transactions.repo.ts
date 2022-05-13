import { Injectable } from "@nestjs/common"
import * as MOCKED_TRANSACTIONS from "./transactions.json"
import { Asset, Transaction, TransactionNature } from "./transactions.types"

/**
 * This repo class is a "mocked" in-memory transactions database
 * that should be used in order to perform any CRUD operation
 */
@Injectable()
export class TransactionsRepo {
  private readonly transactions = MOCKED_TRANSACTIONS as Transaction[]

  getAll = () => this.transactions

  getTransactionsByUser = (id: string) => {

    const res = []

    this.transactions.map((el) => {
      if (el.user.id === id) res.push(el);
    })

    return res;
  }

  add = (transaction: Transaction) => this.transactions.push(transaction)

  getBalanceByUser = (id: string) => {

    const totals = {};
    const res = [];
    const userAsset = this.transactions.filter((el) => el.user.id === id);

    userAsset.forEach((el) => {
      if (totals.hasOwnProperty(el.asset)) totals[el.asset] = totals[el.asset] + el.amount;
      else totals[el.asset] = el.amount
    })

    for(const el in totals) res.push({asset: el, amount: totals[el]});

    return res;
  }

  getNewID = () => {
    const lastId = this.transactions.at(-1).id;
    const strSplit = lastId.split('-');
    return `${strSplit[0]}-${strSplit[1]}-${parseInt(strSplit[2]) + 1 }`
  }

  getUsers = () => {
    let users = [];
    this.transactions.forEach((el) => {
      if(!users.includes(el.user.id)) users.push(el.user.id);
    })
    return users;
  }

  putInterest = (asset: string, rate: number, idUser: string) => {
    const userAssets = this.getBalanceByUser(idUser);
    const assetAmount = userAssets.filter((el) => {
      if (el.asset === asset) return el;
    })

    const newInterest: Transaction = {
      id: this.getNewID(),
      nature: {
        code: TransactionNature.Interest
      },
      createdOn: new Date().toUTCString(),
      amount: assetAmount[0].amount * rate,
      asset: asset,
      user: {
        id: idUser
      }
    }

    this.add(newInterest);

    return {lastId: newInterest.id.toString()};
  }


}
