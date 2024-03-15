import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, Typography, Button } from '@mui/material';
import { colors, complectations, models } from './mocs';

const ComplectationSelection = ({ model, onSelect }) => {
  const [selectedComplectation, setSelectedComplectation] = useState(null);

  const handleSelectComplectation = (complectation) => {
    setSelectedComplectation(complectation); // Запоминаем выбранную комплектацию
  };

  const handleNextClick = () => {
    if (selectedComplectation) {
      onSelect(selectedComplectation); // Переходим к следующему шагу
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography variant="h1" component="h2" gutterBottom>
        Выберите комплектацию {model.modelName}
      </Typography>
      <Box
        component="img"
        sx={{ maxWidth: 600, width: '100%', height: 'auto' }}
        src={`feramontSlide/${model.photo}`}
        alt={`Фото ${model.modelName}`}
      />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
        {complectations.map((complectation) => (
          <Card
            key={complectation.id}
            sx={{
              maxWidth: 345,
              border: selectedComplectation === complectation ? '2px solid blue' : '1px solid grey',
            }}
            onClick={() => handleSelectComplectation(complectation)}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {complectation.complectationName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {complectation.features.map((feature, index) => (
                    <Box key={index}>{feature}</Box>
                  ))}
                </Typography>
                <Typography variant="h5">
                  Цена: {complectation.price.toLocaleString('ru-RU')} ₽
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Button
        variant="contained"
        onClick={handleNextClick}
        disabled={!selectedComplectation}
        sx={{ mt: 2 }}
      >
        Выбрать цвет →
      </Button>
    </Box>
  );
};

export default ComplectationSelection;
