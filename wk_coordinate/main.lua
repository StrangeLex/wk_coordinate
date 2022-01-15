---------------------------------------------------------------------------------------
--                                                                                   --
--                                                                                   --
--                                                                                   --
-- Script developped by wikili202; wikili202@gmail.com; wikili202#5601               --
--                                                                                   --
--                                                                                   --
--                                                                                   --
---------------------------------------------------------------------------------------

print('^3wk_coordinate^7, développé par ^1wikili202 ^7| ^6Twitch wikili202')
print('^3Usage^7: ^6/coord ^7| ^1Ctrl + V pour coller les coordonnées.')

local display = false

RegisterCommand("coord", function(source, args)
	local coords = GetEntityCoords(GetPlayerPed(-1), false)
	local scoord = ""..coords
	SendNUIMessage({type = "wk", cordinate = scoord})
	SetDisplay(not display)
end)

RegisterNUICallback("exit", function(data)
    SetDisplay(false)
end)


function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        -- https://runtime.fivem.net/doc/natives/#_0xFE99B66D079CF6BC
        --[[ 
            inputGroup -- integer , 
	        control --integer , 
            disable -- boolean 
        ]]
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 322, display) -- ESC
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)

function chat(str, color)
    TriggerEvent(
        'chat:addMessage',
        {
            color = color,
            multiline = true,
            args = {str}
        }
    )
end