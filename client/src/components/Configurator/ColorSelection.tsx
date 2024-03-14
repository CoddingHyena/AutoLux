import React, { useEffect, useState } from 'react';
import { Box, Card, CardActionArea, Typography, Button, Grid } from '@mui/material';
import { colors } from './mocs'; // Предполагается, что ваши данные о цветах импортируются отсюда

const ColorSelection = ({ model, onSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const defaultColor = colors.find(
      (c) => c.colorName === 'Corvus Black' && c.model_id === model.id
    );
    setSelectedColor(defaultColor);
  }, [model.id]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleNextClick = () => {
    if (selectedColor) {
      onSelect(selectedColor);
    }
  };

  const availableColors = colors.filter((c) => c.model_id === model.id);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, my: 4 }}>
      <Typography variant="h1" gutterBottom>
        Выберите цвет для {model.modelName}
      </Typography>
      {selectedColor && (
        <Box
          component="img"
          sx={{ maxWidth: 600, width: '100%', height: 'auto' }}
          src={`feramontSlide/${selectedColor.photo}`}
          alt={`Выбранный цвет: ${selectedColor.colorName}`}
        />
      )}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
        {availableColors.map((color) => (
          <Card
            key={color.id}
            sx={{
              maxWidth: 200,
              border: selectedColor === color ? '2px solid blue' : '1px solid grey',
            }}
            onClick={() => handleColorClick(color)}
          >
            <CardActionArea
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  backgroundColor: color.colorCode,
                  border: '1px solid rgba(0, 0, 0, 0.1)', // Еле заметный границу
                }}
              />
              <Typography gutterBottom variant="h6" component="div" sx={{ mt: 1 }}>
                {color.colorName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Цена: {color.price.toLocaleString('ru-RU')} ₽
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Button
        variant="contained"
        onClick={handleNextClick}
        disabled={!selectedColor}
        sx={{ mt: 2 }}
      >
        Рассчитать цену
      </Button>
    </Box>
  );
};

export default ColorSelection;
