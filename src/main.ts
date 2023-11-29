import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
// declare const module: any;

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);

//   if (module.hot) {
//     module.hot.accept();
//     module.hot.dispose(() => app.close());
//   }
// }
// bootstrap();

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Todos examples')
    .setDescription('The Todos API description')
    .setVersion('1.0')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();

  const options = {
    swaggerOptions: { persistAuthorization: true }
    //  {
    //   authAction: {
    //     defaultBearerAuth: {
    //       name: 'defaultBearerAuth',
    //       schema: {
    //         description: 'Default',
    //         type: 'http',
    //         in: 'header',
    //         scheme: 'bearer',
    //         bearerFormat: 'JWT',
    //       },
    //     },
    //   },
    // },
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, options);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();