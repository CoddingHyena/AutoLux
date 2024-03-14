import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { models } from './mocs'; // Ваши данные о моделях

const ModelSelection = ({ onSelect }) => {
  return (
    <div>
      <Typography
        variant="h1"
        gutterBottom
        component="div"
        style={{ textAlign: 'center', margin: '20px 0' }}
      >
        Конфигуратор Автомобиля
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {models.map((model) => (
          <Grid item key={model.id}>
            <Card sx={{ maxWidth: 500, cursor: 'pointer' }} onClick={() => onSelect(model)}>
              <CardMedia
                component="img"
                image={`feramontSlide/${model.photo}`}
                alt={model.modelName}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {model.modelName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Цена от: {model.price.toLocaleString('ru-RU')} ₽
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ModelSelection;
