# EV Tesla Card

<img width="516" height="468" alt="image" src="https://github.com/user-attachments/assets/96bfdd0a-eebd-4505-8a0a-420fe78ca1d4" />


## Features

- Battery level with color-coded tiers (green/orange/red)
- Charging state with shimmer animation and time remaining
- Location badge (Home/Away) with pulse animation
- Estimated range and odometer
- Charge limit marker on battery bar
- Configurable car image (URL or entity)
- Glassmorphic stats panel with backdrop blur

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** > **Custom repositories**
3. Add this repository URL and select **Lovelace** as the category
4. Install **EV Tesla Card**
5. Add the resource in **Settings > Dashboards > Resources**:
   ```
   /hacsfiles/ev-tesla-card/ev-tesla-card.js
   ```

### Manual

1. Download `ev-tesla-card.js` from the [latest release](../../releases/latest)
2. Copy it to `config/www/ev-tesla-card.js`
3. Add the resource in **Settings > Dashboards > Resources**:
   ```
   /local/ev-tesla-card.js
   ```

## Configuration

| Option | Required | Description |
|---|---|---|
| `type` | Yes | `custom:ev-tesla-card` |
| `title` | No | Card title (default: `Tesla`) |
| `battery_entity` | Yes | Battery level sensor |
| `charging_entity` | Yes | Charging state binary sensor |
| `location_entity` | Yes | Device tracker or sensor |
| `range_entity` | No | Estimated range sensor |
| `charge_limit_entity` | No | Charge limit sensor |
| `odometer_entity` | No | Odometer sensor |
| `charging_power_entity` | No | Charging power sensor |
| `time_remaining_entity` | No | Time remaining sensor (minutes or hours) |
| `image_url` | No | Direct URL to car image |
| `image_entity` | No | Entity with `entity_picture` attribute |

### Example

```yaml
type: custom:ev-tesla-card
title: Flashdrive
battery_entity: sensor.tesla_battery_level
charging_entity: binary_sensor.tesla_charging
location_entity: device_tracker.tesla_location_tracker
range_entity: sensor.tesla_range
charge_limit_entity: sensor.tesla_charge_limit
odometer_entity: sensor.tesla_odometer
charging_power_entity: sensor.tesla_charger_power
time_remaining_entity: sensor.tesla_time_charge_remaining
image_url: https://static-assets.tesla.com/v1/compositor/...
```
