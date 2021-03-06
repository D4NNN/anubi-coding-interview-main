import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"

import "reflect-metadata"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle("Anubi Coding Interview")
    .setDescription("Anubi Digital API")
    .setVersion("1.0")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  await app.listen(3081)
}
bootstrap()
